import React, { FC } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';
import { StyledPaginationProps } from '../../helpers/interfaces/interfaces';

const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            '& > * + *': {
                marginTop: theme.spacing(2),
            },
            '& .Mui-selected': {
                color: '#f49100',
                fontWeight: 700
            },


        },

    }),
);

export const StyledPagination: FC<StyledPaginationProps> = ({ handlePaginationChange, page }): any => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Pagination
                count={2} page={page} onChange={handlePaginationChange} size={'large'} />
        </div>
    );
}