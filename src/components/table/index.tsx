'use client'
import React from 'react'
import { DataTableInfinite } from './DataTableInfinite'
import { columns } from './column'
import { useInfiniteQuery } from '@tanstack/react-query';
import { dataOptions } from '@/src/queries/table/query-options';
import { useQueryStates } from 'nuqs';
import { searchParamsParser } from './search-params';

function Table() {
  const [search] = useQueryStates(searchParamsParser);
  console.log(search , 'seafksdjfgkjg')
  const { data, isFetching, isLoading, fetchNextPage } = useInfiniteQuery(dataOptions(search));
  const flatData = React.useMemo(
    () => data?.pages?.flatMap((page) => page.data ?? []) ?? [],
    [data?.pages]
  );

  const lastPage = data?.pages?.[data?.pages.length - 1];
  const totalDBRowCount = lastPage?.totalCount;
  // const filterDBRowCount = lastPage?.meta?.filterRowCount;
  // const totalFilters = lastPage?.meta?.totalFilters;
  const totalFetched = flatData?.length;
 
  //const { sort, start, siz, uuid, ...filter } = search;

  return (
    <div>
    <DataTableInfinite
        columns={columns}
        data={flatData}
       totalRows={totalDBRowCount}
        // filterRows={filterDBRowCount} 
        totalRowsFetched={totalFetched}
        // defaultColumnFilters={Object.entries(filter)
        //   .map(([key, value]) => ({
        //     id: key,
        //     value,
        //   }))
        //   .filter(({ value }) => value ?? undefined)}
        // defaultColumnSorting={sort ? [sort] : undefined}
        // defaultRowSelection={search.uuid ? { [search.uuid]: true } : undefined}
        // filterFields={[]}
        isFetching={isFetching}
         isLoading={isLoading}
        fetchNextPage={fetchNextPage}

      /> 
    </div>
  )
}

export default Table
