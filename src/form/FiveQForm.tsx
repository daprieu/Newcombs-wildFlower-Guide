import * as React from 'react';
import './FiveQForm.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
} from 'formik';
import LocatorKey from '../locatorKey/LocatorKey';
import { LocatorKeyContext, LocatorKeyProvider } from '../providers/LocatorKeyProvider';

interface MyFormValues {
  flowerType: number;
  plantType: number;
  leafType: number;
}
interface IFlowerQs {
    flowerQs: string;
}
interface IPlantQs {
    plantQs: string;
}
interface ILeafQs {
    leafQs: string;
}
const flowerQs: string[] = ['Irregular Flowers', 'Flowers with 2 Regular Parts', 'Flowers with 3 Regular Parts', 'Flowers with 4 Regular Parts', 'Flowers with 5 Regular Parts', 'Flowers with 6 Regular Parts', 'Flowers with 7 or more Regular Parts', 'Flowers Parts Indistinguishable']
const plantQs: string[] = ['Wildflowers with No Apparent Leaves', 'Wildflowers with Basal Leaves Only', 'Wildflowers with Alternate Leaves', 'Wildflowers with Opposite or Whorled Leaves', 'Shrubs', 'Vines']
const leafQs: string[] = ['No Apparent Leaves', 'Leaves Entire', 'Leaves Toothed or Lobed', 'Leaves Divided']


interface Props {
    
}

export const FiveQForm = (props: Props) => {
    const {setKey} = React.useContext(LocatorKeyContext)
    
    const initialValues: MyFormValues = { 
        flowerType: 0,
        plantType: 0,
        leafType: 0
    };
    
    return (
      <div >
        <h1>Describe the plant</h1>
        <Formik 
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            console.log({ values, actions });
            // alert(JSON.stringify(values, null, 2));
            setKey(Number(values.flowerType+values.plantType+values.leafType))
            actions.setSubmitting(false);
          }}
        >
        {({ values }) => (
        <Form className="fiveForm-wrapper">
            <div id="my-radio-group">Flower Type</div>
            <div className="fl" role="group" aria-labelledby="my-radio-group">
            {flowerQs.map(q => (
                <label>
                <Field type="radio" name="flowerType" value={`${flowerQs.indexOf(q) + 1}`} />
                {q}
                </label>
            ))}
          </div>
          <div id="my-radio-group">Plant Type</div>
            <div className="fl" role="group" aria-labelledby="my-radio-group">
            {plantQs.map(q => (
                <label>
                <Field type="radio" name="plantType" value={`${plantQs.indexOf(q) + 1}`} />
                {q}
                </label>
            ))}

            
          </div>
          <div id="my-radio-group">Leaf Type</div>
            <div className="fl" role="group" aria-labelledby="my-radio-group">
            {leafQs.map(q => (
                <label>
                <Field type="radio" name="leafType" value={`${leafQs.indexOf(q) + 1}`} />
                {q}
                </label>
            ))}

            
          </div>
          <div>Locator Key: {values.flowerType}{values.plantType}{values.leafType}</div>
            <button type="submit">Submit</button>
          </Form>
          )}
        </Formik>
        {/* <LocatorKey props={stateKey}/> */}
      </div>
    )
}
