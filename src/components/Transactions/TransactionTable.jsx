import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
} from "@chakra-ui/react";

export default function TransactionTable() {
  const tableData = [
    {
        id:1,
      name: "HD82NA2H",
      date: "2022-06-09",
      time: "07:06 PM",
      type: "INR Deposit",
      type1: "E-Transfer",
      amount: "+ ₹81,123.10",
      status: "Pending",

    },
    {
        id:2,
      name: "HD82NA2H",
      date: "2022-02-04",
      time: "06:06 PM",
      type: "INR Withdraw",
      type1: "Withdraw Transfer",
      amount: "- ₹93,131.10",
      
      status: "Processing",
    },
    {
        id:3,
      name: "HD82NA2H",
      date: "2023-10-07",
      time: "09:08 AM",
      type: "Buy",
    //   type1: "Withdraw Transfer",
      amount: "+ 12.48513391 BTC",
      SmallAmount:'- $81,123.10',
      status: "cancelled",
    },
    {
        id:4,
      name: "HD82NA2H",
      date: "2024-01-24",
      time: "12:02 PM",
      type: "Sell",
    //   type1: "Withdraw Transfer",
      amount: "- 0.36401628 BTC",
      SmallAmount:'+ $19,378.84',
      status: "completed",
    },
    {
        id:5,
      name: "HD82NA2H",
      date: "2022-02-04",
      time: "06:06 PM",
      type: "BTC Deposit",
    //   type1: "Withdraw Transfer",
      amount: "- 10.00000000 BTC",
      SmallAmount:'+ $37,929.31',
      status: "completed",
    },
    {
        id:6,
      name: "HD82NA2H",
      date: "2019-22-14",
      time: "10:03 AM",
      type: "BTC Withdraw",
    //   type1: "Withdraw Transfer",
      amount: "- ₹93,131.10",
      SmallAmount:'- $62,017.58',
      status: "completed",
    },
  ];
  return (
    <TableContainer>
      <Table size="sm">
        <Thead>
          <Tr color={"gray.100"}  >
            <Th  p={4}>ID</Th>
            <Th p={4}>Date & Time</Th>
            <Th p={4}>Type</Th>
            <Th p={4}>Amount</Th>
            <Th p={4}>Status</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tableData.map((elem, index) => (
            <Tr key={elem.id} >
              <Td fontSize={{md:'16px',sm:'12px',base:'12px'}} py={9}> {elem.name}</Td>
              <Td >
                <Box fontSize={{md:'16px',sm:'12px',base:'12px'}}> {elem.date}</Box>{" "}
                <Box fontSize={"12px"} fontWeight={"400"} color={"gray.500"}>
                  {" "}
                  {elem.time}{" "}
                </Box>
              </Td>
              <Td>
                {" "}
                <Box fontSize={{md:'16px',sm:'12px',base:'12px'}}> {elem.type}</Box>{" "}
                <Box fontSize={"12px"} fontWeight={"400"} color={"gray.500"}>
                  {" "}
                  {elem.type1}{" "}
                </Box>
              </Td>
              <Td><Box fontSize={{md:'16px',sm:'12px',base:'12px'}}>{elem.amount}</Box> <Box fontSize={"12px"} fontWeight={"400"} color={"gray.500"}>{elem.SmallAmount}</Box></Td>
              <Td > <Box fontSize={{md:'16px',sm:'12px',base:'12px'}} bg={elem.id === 1? 'gray.400':elem.id==2?'yellow.400':elem.id===3?'red':'green'} color={'white'} borderRadius={'full'} px={2} py={1} w={'fit-content'} >{elem.status}</Box></Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
