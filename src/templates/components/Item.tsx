'use client';

import { FC } from 'react';

type Props = { text: string };

const Item: FC<Props> = ({ text }) => <li className="Item">{text}</li>;

export default Item;
