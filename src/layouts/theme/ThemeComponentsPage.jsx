import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CurrencyField from '../../components/common/Form/CurrencyField';
import DatePickerField from '../../components/common/Form/DatePickerField';
import InputField from '../../components/common/Form/InputField';
import TimePickerField from '../../components/common/Form/TimePickerField';
  
const ThemeComponentsPage = (props) => {
  
  return (
    <>
      <div className='py-3'>
        <h1 className='mb-2 text-center'>Components</h1>

        <div className='container'>
          <Row>
            <Col md="6">
              <InputField value="Code Matra" placeholder="Enter a value" label="Input Label" />
            </Col>
            <Col md="6">
              <CurrencyField placeholder="Enter a value" label="Currency Input Label"/>
            </Col>
            <Col md="6">
              <DatePickerField defaultValue="today" label="Date Picker Label"/>
            </Col>
            <Col md="6">
              <TimePickerField label="Time Picker Label"/>
            </Col>
          </Row>
        </div>

      </div>
    </>
  )
}

export default ThemeComponentsPage;