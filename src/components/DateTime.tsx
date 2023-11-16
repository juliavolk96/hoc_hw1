import React from "react";
import { withFormattedDate } from "./withFormattedDate";

interface DateTimeProps {
  date: string;
}

const DateTime = (props: DateTimeProps) => {
  return <p className="date">{props.date}</p>;
};

const DateTimePretty = withFormattedDate(DateTime);

export { DateTimePretty };
