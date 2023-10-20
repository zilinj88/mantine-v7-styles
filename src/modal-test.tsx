import { Loader, Modal, Select,Text } from '@mantine/core'
import {type JSX} from 'react'
import { zIndex } from './z-index'
import { DatePickerInput } from '@mantine/dates'

export function SelectInModal(): JSX.Element {
  return (
    <Modal zIndex={zIndex.modal} opened onClose={() => {/**/}}>
      <Select label='Select Something' placeholder='Select' data={['option 1', 'option 2', 'option 3']} styles={{dropdown:{zIndex: zIndex.modal}}}/>
      <DatePickerInput placeholder='Select' popoverProps={{zIndex: zIndex.modal}}/>
      <Loader size={20} />
      <Text>Random content</Text>
      <Text>Random content</Text>
      <Text>Random content</Text>
      <Text>Random content</Text>
      <Text>Random content</Text>
      <Text>Random content</Text>
      <Text>Random content</Text>
      <Text>Random content</Text>
      <Text>Random content</Text>
      <Text>Random content</Text>
      <Text>Random content</Text>
    </Modal>
  )
}