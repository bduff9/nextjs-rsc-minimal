'use client';

import { FC } from 'react';

type Props = { text: string };

const Headline: FC<Props> = ({ text }) => <h2 className="Headline">{text}</h2>;

export default Headline;
