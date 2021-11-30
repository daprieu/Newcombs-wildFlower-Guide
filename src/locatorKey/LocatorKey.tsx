import React, {useContext, useEffect} from 'react'
import GN111 from '../forms/groupNumForms/GN111';
import { LocatorKeyContext } from '../providers/LocatorKeyProvider';



interface Props {
    props?: any
}

export const LocatorKey = (props: Props) => {
    console.log('props: ', props);
    const {key} = useContext(LocatorKeyContext)
    
    console.log('keylocatorKey: ', key);
        if (key === 111) {
            return <GN111 />
        }
        if (key === 122){

        } 
        if (key === 123){

        } 
        if (key === 124){

        } 
        if (key === 132){

        } 
        if (key === 133){

        } 
        if (key === 134){

        } 
        if (key === 142){

        } 
        if (key === 143){

        } 
        if (key === 144){

        } 
        if (key === 151){

        } 
        if (key === 152){

        } 
        if (key === 153){

        } 
        if (key === 154){

        } 
        if (key === 162){

        } 
        if (key === 164){

        } 
        if (key >= 232 && key <= 264){
            console.log("key between 232 and 264")
        } 
        if (key === 322){

        } 
        if (key === 332){

        } 
        if (key === 333){

        } 
        if (key === 334){

        } 
        if (key === 342){

        } 
        if (key === 352){

        } 
        if (key === 262){

        }
        if (key === 411){

        } 
        if (key === 422){

        } 
        if (key === 432){
            return <div>Leaves entire</div>
        }
        if (key === 433) {
            console.log("It is a Sunny day")
        }
        if (key === 434){

        } 
        if (key === 442){

        } 
        if (key === 443){

        } 
        if (key === 444){

        } 
        if (key === 452){

        } 
        if (key === 453){

        } 
        if (key === 454){

        } 
        if (key === 464){

        } 
        if (key === 511){

        } 
        if (key === 522){

        } 
        if (key === 523){

        } 
        if (key === 524){

        } 
        if (key === 532){

        } 
        if (key === 533){

        } 
        if (key === 534){

        } 
        if (key === 542){
            console.log("key between 232 and 264")
        } 
        if (key === 543){

        } 
        if (key === 544){

        } 
        if (key === 551){

        } 
        if (key === 552){

        } 
        if (key === 553){

        } 
        if (key === 554){

        } 
        if (key === 561){

        }
        if (key === 562){

        } 
        if (key === 563){

        } 
        if (key === 564){
            return <div>Leaves entire</div>
        }
        if (key === 611) {
            console.log("It is a Sunny day")
        }
        if (key === 622){

        } 
        if (key >= 623 && key <= 624){

        } 
        if (key === 632){

        } 
        if (key === 633){

        } 
        if (key === 634){

        } 
        if (key === 642){

        } 
        if (key >= 643 && key <= 644){

        } 
        if (key >= 651 && key <= 653){

        } 
        if (key >= 662 && key <= 663){

        } 
        if (key === 711){

        } 
        if (key === 722){

        } 
        if (key >= 723 && key <= 724){

        } 
        if (key === 732){

        } 
        if (key >= 733 && key <= 734){

        } 
        if (key === 742){

        } 
        if (key === 743){
            console.log("key between 232 and 264")
        } 
        if (key === 744){

        } 
        if (key >= 752 && key <= 764){

        } 
        if (key === 811){

        } 
        if (key >= 822 && key <= 823){

        } 
        if (key === 832){

        } 
        if (key === 833){

        } 
        if (key === 834){

        }
        if (key === 842){

        } 
        if (key >= 843 && key <= 844){

        } 
        if (key >= 851 && key <= 853){
            return <div>Shrubs</div>
        }
        if (key >= 862 && key <= 864) {
            console.log("vines")
        }
        else {
            return <div>DNE</div>
        }
            
    
    return (
        <div>
            Hello
        </div>
    )
}

export default LocatorKey
