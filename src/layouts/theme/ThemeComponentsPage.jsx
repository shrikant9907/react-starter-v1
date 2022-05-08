import React from 'react';
import { Col, Row } from 'react-bootstrap';
import CurrencyField from '../../components/common/Form/CurrencyField';
import DatePickerField from '../../components/common/Form/DatePickerField';
import EmailField from '../../components/common/Form/EmailField';
import InputField from '../../components/common/Form/InputField';
import SelectField from '../../components/common/Form/SelectField';
import TextAreaField from '../../components/common/Form/TextAreaField';
import TimePickerField from '../../components/common/Form/TimePickerField';
  
const ThemeComponentsPage = (props) => {

  const options = [
    {
      label: 'Option 1',
      value: '1',
    },
    {
      label: 'Option 2',
      value: '2',
    }
  ]; 
  
  
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
              <EmailField required={true} value="" placeholder="Enter a email" label="Email Label" />
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
            <Col md="6">
              <SelectField options={options} label="Select Options Label"/>
            </Col>
            <Col md="6">
              <TextAreaField value="Code Matra Test" placeholder="Enter a value" label="Text Area Label" />
            </Col>
          </Row>
        </div>

      </div>
    </>
  )
}

export default ThemeComponentsPage;