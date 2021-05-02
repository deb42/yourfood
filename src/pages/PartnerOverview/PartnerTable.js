import { makeStyles } from '@material-ui/core/styles';
import { Paper, Table, TableBody, TableCell, TableContainer, TableRow } from "@material-ui/core";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    paper: {
        width: '100%',
        marginBottom: theme.spacing(2),
    },
    tableContainer: {
        overflowX: 'hidden'
    },
    table: {
        minWidth: 750,
    }
}));

const PartnerTable = ({ partner, hoveredPartner, selectedPartner, onRowHover, onRowSelect, bounds }) => {
    const classes = useStyles();

    const _onMouseClick = (id) => {
        onRowSelect(id)
    }

    const _onMouseEnter = (id) => {
        onRowHover(id)
    }

    const _onMouseLeave = () => {
        onRowHover("")
    }

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <TableContainer className={classes.tableContainer}>
                    <Table
                        className={classes.table}
                        aria-labelledby="tableTitle"
                        aria-label="enhanced table"
                    >
                        <TableBody>
                            {partner.filter((v) => {
                                return bounds[2] < v.position.lat && v.position.lat < bounds[0] && bounds[1] < v.position.lng && v.position.lng < bounds[3];
                            }).map((p, i) => (
                                <TableRow
                                    style={hoveredPartner === p.partnerId ? { backgroundColor: 'rgba(0, 0, 0, 0.04)' } : {}}
                                    onMouseEnter={() => _onMouseEnter(p.partnerId)}
                                    onMouseLeave={_onMouseLeave}
                                    onClick={() => _onMouseClick(p.partnerId)}
                                    role="checkbox"
                                    aria-checked={selectedPartner === p.partnerId}
                                    tabIndex={-1}
                                    key={p.partnerId}
                                    selected={selectedPartner === p.partnerId}
                                >
                                    <TableCell>

                                        {p.name}
                                    </TableCell>
                                </TableRow>)

                            )}

                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
    );
}

export default PartnerTable