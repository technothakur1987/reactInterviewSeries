 let [word, setword] = useState(" ");
  let [counter, setcounter] = useState(0);
  let [wordarray, setwordarray] = useState('')
   

  useEffect(()=>{
    let str = inputValue;
   let wordarrayw = str.split(" ");
   console.log(wordarrayw)
   setwordarray(wordarrayw)
   console.log(wordarray)

  },[])
  
    useEffect(()=>{
      setcounter(counter+1)

    },[counter])
  
    useEffect(() => {
      let str = inputValue;
      let wordarray = str.split(" ");
      let inter = setInterval(() => {
        setword(wordarray[counter]);
        setcounter(counter++);
        if (counter == wordarray.length) {
          clearInterval(inter);
        }
      }, 2000);
    }, [word]);