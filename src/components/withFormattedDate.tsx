import React from 'react';
import moment from 'moment';

interface DateTimePrettyProps {
    date: string;
}

//HOC
const withFormattedDate = (WrappedComponent: React.ComponentType<DateTimePrettyProps>) => {
    return (props: DateTimePrettyProps) => {
        const formattedDate = formatDateTime(props.date);
        return <WrappedComponent {...props} date={formattedDate}/>
    };
};

const formatDateTime = (date: string): string => {
    const momentDate = moment(date);
    const now = moment();

    if (now.diff(momentDate, 'minutes') < 60) {
        return `${now.diff(momentDate, 'minutes')} минут назад`;
    } else if (now.diff(momentDate, 'hours') <24) {
        return `${now.diff(momentDate, 'hours')} часов назад`;
    } else {
        return `${now.diff(momentDate, 'days')} дней назад`;
    }
};

export { withFormattedDate };