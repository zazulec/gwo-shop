import React, { FC } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';


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

interface StyledPaginationProps {
    handlePaginationChange: (event: React.ChangeEvent<unknown>, value: number) => any;
    page: number;
}


export const StyledPagination: FC<StyledPaginationProps> = ({ handlePaginationChange, page }): any => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Pagination
                count={2} page={page} onChange={handlePaginationChange} size={'large'} />
        </div>
    );
}