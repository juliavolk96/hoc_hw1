import React from 'react';
import moment from 'moment';

interface DateTimePrettyProps {
    date: string;
}

//HOC (Higher-Order Component)
const withFormattedDate = (WrappedComponent: React.ComponentType<DateTimePrettyProps>) => {
    //Возвращаем новый компонент, который оборачивает переданный компонент
    return (props: DateTimePrettyProps) => {
        //Форматируем дату
        const formattedDate = formatDateTime(props.date);
        //Возвращаем обернутый компонент с датой
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