import * as React from "react";
import { flexRender, Table as TanstackTable, Row } from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/Components/ui/table";
import { PaginationLinks, PaginationMeta } from "@/types";
import Pagination from "./Pagination";

interface DataTableOptions {
    table: TanstackTable<any>;
    subComponent?: (pwrops: { row: Row<any> }) => React.ReactElement;
    pagination?: { links: PaginationLinks; meta: PaginationMeta };
    noDataPlaceholder?: () => React.ReactNode;
}

export default function DataTable({ options }: { options: DataTableOptions }) {
    return (
        <>
            <Table>
                <TableHeader>
                    {options.table.getHeaderGroups().map((headerGroup) => (
                        <TableRow key={headerGroup.id}>
                            {headerGroup.headers.map((header) => (
                                <TableHead key={header.id}>
                                    {header.isPlaceholder
                                        ? null
                                        : flexRender(
                                              header.column.columnDef.header,
                                              header.getContext()
                                          )}
                                </TableHead>
                            ))}
                        </TableRow>
                    ))}
                </TableHeader>
                <TableBody>
                    {options.table.getRowModel().rows?.length ? (
                        options.table.getRowModel().rows.map((row) => (
                            <React.Fragment key={row.id}>
                                <TableRow
                                    data-state={
                                        row.getIsSelected() && "selected"
                                    }
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}
                                        </TableCell>
                                    ))}
                                </TableRow>
                                {row.getCanExpand() &&
                                typeof options.subComponent != "undefined"
                                    ? row.getIsExpanded() && (
                                          <TableRow className="hover:bg-transparent dark:hover:bg-transparent">
                                              <TableCell
                                                  colSpan={
                                                      row.getVisibleCells()
                                                          .length
                                                  }
                                              >
                                                  {options.subComponent({
                                                      row,
                                                  })}
                                              </TableCell>
                                          </TableRow>
                                      )
                                    : null}
                            </React.Fragment>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell
                                colSpan={options.table.getAllColumns().length}
                                className="h-24 text-center"
                            >
                                {options.noDataPlaceholder
                                    ? options.noDataPlaceholder()
                                    : "Aucun résultat."}
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
            <div className="bg-white dark:bg-gray-700 py-2">
                {options.pagination &&
                    options.pagination.meta.per_page <
                        options.pagination.meta.total && (
                        <Pagination
                            links={options.pagination.links}
                            meta={options.pagination.meta}
                        />
                    )}
            </div>
        </>
    );
}
