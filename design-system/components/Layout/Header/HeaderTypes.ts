import { HtmlHTMLAttributes } from "react";

export type HeaderProps = HtmlHTMLAttributes<HTMLDivElement> & { peopleId: number, setPeople: Function };
