import React from 'react';
import Card from '../components/Card';

const Page = () => {
  return (
    <div>
      <Card title='Card 1' description='Lorem ipsum Lorem Ipsum' rate={1}></Card>
      <Card title='Card 2' description='Lorem ipsum Lorem Ipsum' rate={2}></Card>
      <Card title='Card 3' description='Lorem ipsum Lorem Ipsum' rate={2}></Card>
    </div>
  );
}

export default Page;