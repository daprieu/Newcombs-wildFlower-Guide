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
import { Button } from '@mui/material';

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
        <Formik 
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            setKey(Number(values.flowerType+values.plantType+values.leafType))
            actions.setSubmitting(false);
          }}
        >
        {({ values, setFieldValue }) => (
        <Form className="fiveForm-wrapper fl">
            <FormControl component="fieldset">
              <FormLabel component="legend">Flower Type</FormLabel>
              <RadioGroup
                aria-label="flowerType"
                name="flowerType"
                value={values.flowerType} onChange={(event) => {
                  setFieldValue('flowerType', event.currentTarget.value)
                }}>
              {flowerQs.map(q => (
                <FormControlLabel sx={{ ml: 2 }} value={`${flowerQs.indexOf(q) + 1}`} control={<Radio/>} label={q}/>
              ))}
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Plant Type</FormLabel>
              <RadioGroup
                aria-label="plantType"
                name="plantType"
                value={values.plantType} onChange={(event) => {
                  setFieldValue('plantType', event.currentTarget.value)
                }}>
              {plantQs.map(q => (
                <FormControlLabel sx={{ ml: 2 }} value={`${plantQs.indexOf(q) + 1}`} control={<Radio/>} label={q}/>
              ))}
              </RadioGroup>
            </FormControl>
            <FormControl component="fieldset">
              <FormLabel component="legend">Leaf Type</FormLabel>
              <RadioGroup
                aria-label="leafType"
                name="leafType"
                value={values.leafType} onChange={(event) => {
                  setFieldValue('leafType', event.currentTarget.value)
                }}>
              {leafQs.map(q => (
                <FormControlLabel sx={{ ml: 2 }} value={`${leafQs.indexOf(q) + 1}`} control={<Radio/>} label={q}/>
              ))}
              </RadioGroup>
            </FormControl>            
            <Button type="submit" variant="contained">Submit</Button>
          </Form>
          )}
        </Formik>
      </div>
    )
}
