import Box from '@mui/material/Box'
import {
  DataGrid,
  gridPageCountSelector,
  GridPagination,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid'
import MuiPagination from '@mui/material/Pagination'
import { TablePaginationProps } from '@mui/material/TablePagination'
import { useEffect, useState } from 'react'
import { CustomerData } from '@/models/customer.model'
import { fetchCustomer } from '@/services/serverService'

const Pagination = ({
  page,
  onPageChange,
  className,
}: Pick<TablePaginationProps, 'page' | 'onPageChange' | 'className'>) => {
  const apiRef = useGridApiContext()
  const pageCount = useGridSelector(apiRef, gridPageCountSelector)

  return (
    <MuiPagination
      color='primary'
      className={className}
      count={pageCount}
      page={page + 1}
      onChange={(event, newPage) => {
        onPageChange(event as any, newPage - 1)
      }}
    />
  )
}

const CustomPagination = (props: any) => {
  return <GridPagination ActionsComponent={Pagination} {...props} />
}

const Customers = () => {
  const [customers, setCustomer] = useState<CustomerData[]>([])

  const columns = [
    {
      field: 'customer_id',
      headerName: 'ID',
      width: 100,
      sortable: true,
      filterable: false,
    },
    {
      field: 'name',
      headerName: 'Name',
      width: 200,
      sortable: true,
      filterable: false,
    },
    {
      field: 'gender',
      headerName: 'Gender',
      width: 100,
      sortable: false,
      filterable: false,
    },
    {
      field: 'phone',
      headerName: 'Phone Number',
      width: 200,
      sortable: true,
      filterable: false,
    },
  ]

  useEffect(() => {
    fetchCustomer()
      .then(({ data }) => setCustomer(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <Box className='h-[60vh]' sx={{ width: '100%' }}>
      {customers && (
        <DataGrid
          pagination
          slots={{
            pagination: CustomPagination,
          }}
          columns={columns}
          rows={customers}
          getRowId={(row) => row._id}
          initialState={{
            pagination: { paginationModel: { pageSize: 8 } },
          }}
        />
      )}
    </Box>
  )
}

export default Customers