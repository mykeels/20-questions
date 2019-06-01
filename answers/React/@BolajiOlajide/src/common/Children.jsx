import React from 'react';

// components
import Home from '../components/Home';
import NameConcatenation from '../components/NameConcatenation';
import Lottery from '../components/Lottery';
import WordInReverse from '../components/WordReverse';
import TypeReverse from '../components/TypeReverse';
import TemperatureConverter from '../components/TemperatureConverter';
import MultiplicationTable from '../components/MultiplicationTable';
import FileReaderComponent from '../components/FileReader';
import FileCombiner from '../components/FileCombiner';
import RGBColorGenerator from '../components/RGBColorGenerator';
import HexCodeGenerator from '../components/HexCodeGenerator';
import FileExtension from '../components/FileExtension';
import SalaryClassifier from '../components/SalaryClassifier';
import TaxClassifier from '../components/TaxClassifer';
import NumbersInWords from '../components/NumbersInWords';
import CompoundInterest from '../components/CompoundInterest';
import DecimalConverter from '../components/DecimalConverter';
import BaseNConverter from '../components/BaseNConverter';


function Children({ page, setPage }) {
  switch(page) {
    case 'home':
      return <Home setPage={setPage} />;
    case 'name-concatenation':
      return <NameConcatenation setPage={setPage} />;
    case 'lottery':
      return <Lottery setPage={setPage} />;
    case 'word-in-reverse':
      return <WordInReverse setPage={setPage} />;
    case 'type-in-reverse':
      return <TypeReverse setPage={setPage} />;
    case 'temp-converter':
      return <TemperatureConverter setPage={setPage} />;
    case 'multiplication':
      return <MultiplicationTable setPage={setPage} />;
    case 'file-reader':
      return <FileReaderComponent setPage={setPage} />;
    case 'file-combiner':
      return <FileCombiner setPage={setPage} />;
    case 'rgb':
      return <RGBColorGenerator setPage={setPage} />;
    case 'hex':
      return <HexCodeGenerator setPage={setPage} />;
    case 'file-extension':
      return <FileExtension setPage={setPage} />;
    case 'salary':
      return <SalaryClassifier setPage={setPage} />;
    case 'tax':
      return <TaxClassifier setPage={setPage} />;
    case 'numbers-in-words':
      return <NumbersInWords setPage={setPage} />;
    case 'compound-interest':
      return <CompoundInterest setPage={setPage} />;
    case 'decimal-converter':
      return <DecimalConverter setPage={setPage} />;
    case 'base-n-converter':
      return <BaseNConverter setPage={setPage} />;
    case 'cgpa':
    case 'attendance':
    case 'love':
    default:
      return <Home setPage={setPage} />;
  }
}

export default Children;
