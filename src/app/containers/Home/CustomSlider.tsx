import React, { useState } from 'react';
import { Row, Col, Slider, InputNumber } from 'antd';

export default function CustomSlider(props) {
  //props min, max, step, prefix*, suffix*
  const [inputValue, setInputValue] = useState(0);

  const onChange = value => {
    setInputValue(value);
    props.getData(value, props.prefix);
  };
  return (
    <Row style={{ width: '100%', marginBottom: '1.5rem' }} align="middle">
      <Col span={5}>{props.prefix}</Col>
      <Col span={12}>
        <Slider
          min={props.min ? props.min : 0}
          max={props.max ? props.max : 100}
          step={props.step ? props.step : 1}
          onChange={onChange}
          value={typeof inputValue === 'number' ? inputValue : 0}
        />
      </Col>
      <Col span={5}>
        <InputNumber
          style={{ margin: '0 16px' }}
          value={inputValue}
          onChange={onChange}
        />
      </Col>
      <Col>{props.suffix}</Col>
    </Row>
  );
}
