import React, { FC } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Pagination } from '@material-ui/lab';


const useStyles = makeStyles((theme) =>
    createStyles({
        root: {
            '& > * + *': {
                marginTop: theme.spacing(2),
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
                count={2} page={page} onChange={handlePaginationChange} />
        </div>
    );
}