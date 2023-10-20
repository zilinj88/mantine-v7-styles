import { Table } from '@mantine/core'
import {type JSX} from 'react'

export function NormalTable():JSX.Element {
  return <Table striped>
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
        <th>Header 3</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>d1</td>
        <td>d2</td>
        <td>d3</td>
      </tr>
      <tr>
        <td>d1</td>
        <td>d2</td>
        <td>d3</td>
      </tr>
      <tr>
        <td>d1</td>
        <td>d2</td>
        <td>d3</td>
      </tr>
    </tbody>
  </Table>
}

export function MantineTable():JSX.Element {
  return <Table striped highlightOnHover>
    <Table.Thead>
      <Table.Tr>
        <Table.Th>Header 1</Table.Th>
        <Table.Th>Header 2</Table.Th>
        <Table.Th>Header 3</Table.Th>
      </Table.Tr>
    </Table.Thead>
    <Table.Tbody>
      <Table.Tr>
        <Table.Td>d1</Table.Td>
        <Table.Td>d2</Table.Td>
        <Table.Td>d3</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>d1</Table.Td>
        <Table.Td>d2</Table.Td>
        <Table.Td>d3</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>d1</Table.Td>
        <Table.Td>d2</Table.Td>
        <Table.Td>d3</Table.Td>
      </Table.Tr>
    </Table.Tbody>
  </Table>
}