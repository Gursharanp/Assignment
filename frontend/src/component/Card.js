import React, { useEffect } from 'react'

export default function Card() {
    let obj = {
        firstVal: "",
        secVal: "",
        thirdVal: "",
        fourthVal: ""
    }
   
    let firstInp = React.createRef();
    let secInp = React.createRef();
    let thirdInp = React.createRef();
    let fourthInp = React.createRef();

    const [val, setVal] = React.useState(obj);
    const[show,setShow]= React.useState(false);
    // const[showArr,setShowArr]= React.useState([]);

    useEffect(() => {
        firstInp.focus();
        secInp.blur();
        thirdInp.blur();
        fourthInp.blur();
    },[])

    let handleChange = (e) => {
        if (firstInp.value.length == 4) {
            secInp.focus();
        }
        if (secInp.value.length == 4) {
            thirdInp.focus();
        }

        if (thirdInp.value.length == 4) {
            fourthInp.focus();
        }
        setVal({
            ...val,
            [e.target.name]: [e.target.value]
        })
    }

    let handleClick=()=>{
       setShow(true);

    }
    let handleDelete=()=>{
        setShow(false)
    }
    let handlePaste=(ele)=>{
       let data=ele.clipboardData.getData("text/plain");
       let arr=data.split("")
       console.log(arr);
    //  6,5,4,3
       let arr1 = arr.splice(0,4)
       let arr2 = arr.splice(0,4)
       let arr3 = arr.splice(0,4)
    //    let arr4 = arr.splice(0,4)
    arr2=arr2.join("")
    arr3=arr3.join("")
    arr=arr.join("")
    setVal({...val,
        "secVal":arr2,
        "thirdVal":arr3,
        "fourthVal":arr,
    });
    //   = arr2.join("");
    //    showArr[1]=arr3.join("");
    //    showArr=arr.join("");
       
    }

    return (
        <div className='main'>
            <div className="inner">
            <input
                max="16"
                maxLength="4"
                name='firstVal'
                ref={(input) => { firstInp = input; }}
                value={val.firstVal}
                onChange={handleChange}
                onPaste={handlePaste}
            />
            <input
                maxLength="4"
                name='secVal'
                ref={(input) => { secInp = input; }}
                value={val.secVal}
                onChange={handleChange}
            />
            <input
                maxLength="4"
                name='thirdVal'

                ref={(input) => { thirdInp = input; }}
                value={val.thirdVal}
                onChange={handleChange}
            />
            <input
                maxLength="4"
                name='fourthVal'
                ref={(input) => { fourthInp = input; }}
                value={val.fourthVal}
                onChange={handleChange}
            />
            <button onClick={handleClick}>Submit</button>
            {
                show?<div className="show"> 
                       {val.firstVal} {val.secVal} {val.thirdVal} {val.fourthVal}
                     <button onClick={handleDelete}>delete</button>
                 </div>:
                <div></div>   
            }
            {/* 9876543219876543 */}
            </div>
        </div>
    )
}
