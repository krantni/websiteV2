import * as React from 'react';
import { TeamOwner } from '../utils/types';

const Team = ({owner}:Props) => {
    return (
        <div>
            <h3>{owner.userName}</h3>
        </div>
    )
}

export interface Props {
    owner: TeamOwner,
}

export default Team;