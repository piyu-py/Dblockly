var issolution=1
        var solutioncolor
        let solutiondisplay=document.querySelector('#solution')
        let pptdisplay =document.querySelector('#ppt')
        let checkbtn=document.querySelector('#check')
        let compounddisplay=document.querySelector('#ion')
        let popup=document.querySelector('#popup')
        let congratulationsheckerareuhappynow=0
        let scoreboard=document.querySelector('#sb')
        var compounds=[
            ['Cu','2+','excess NH<sub>3</sub>',1,'rgb(0, 0, 255)'],
            ['Cu','2+','(aq)',1,'rgb(0, 174, 255)'],
            ['Cu','2+','with NaOH',0,'rgb(0, 174, 255)'],
            ['Cu','2+','with conc. HCl',1,'rgb(255, 255, 2)'],//I know what you are doing
            ['Ni','2+','(aq)',1,'rgb(26, 255, 26)'],
            ['Ni','2+','with NaOH',0,'rgb(26, 255, 26)'],
            ['Ni','2+','excess NH<sub>3</sub>',1,'rgb(0, 0, 255)'],
            ['Ni','2+','with conc. HCl',1,'rgb(255, 255, 2)'],
            ['Ni','2+','with D.M.G',1,'rgb(109, 2, 2)'],
            ['Co','2+','(aq)',1,'rgb(255, 0, 230)'],
            ['Co','2+','with NaOH',0,'rgb(255, 0, 230)'],
            ['Co','2+','excess NH<sub>3</sub>',1,'rgb(255, 255, 2)'],
            ['Co','2+','NH<sub>3</sub> and H<sub>2</sub>O<sub>2</sub>',1,'rgb(85, 43, 43)'],
            ['Co','2+','with conc. HCl',1,'rgb(0, 0, 255)'],
            ['Cr','3+','(aq)',1,'rgb(138, 43, 226)'],
            ['Cr','3+','excess NaOH',1,'rgb(12, 101, 12)'],
            ['Fe','2+','(aq)',1,'rgb(26, 255, 26)'],
            ['Fe','2+','with NaOH',0,'rgb(12, 101, 12)'],
            ['Fe','2+','with NH<sub>3</sub>',0,'rgb(12, 101, 12)'],
            ['Fe','2+','ferricyanide',0,'rgb(0, 0, 255)'],
            ['Fe','2+','ferrocyanide',0,'rgb(255, 255, 255)'],
            ['Fe','3+','(aq)',1,'rgb(255, 255, 2)'],
            ['Fe','3+','with NaOH',0,'rgb(85, 43, 43)'],
            ['Fe','3+','with NH<sub>3</sub>',0,'rgb(85, 43, 43)'],
            ['Fe','3+','ferricyanide',1,'rgb(85, 43, 43)'],
            ['Fe','3+','ferrocyanide',0,'rgb(0, 0, 255)'],
            ['Fe','3+','with NH<sub>4</sub>SCN',1,'rgb(109, 2, 2)'],
            ['Fe','3+','with conc. HCl',1,'rgb(255, 255, 2)'],
            ['Mn','2+','(aq)',1,'rgb(255, 138, 232)'],
            ['Mn','2+','with NaOH',0,'rgb(255, 255, 255)'],
    ]   
        
        function randomelement(arr){
            return Math.floor(Math.random() * arr.length)
        }
        var compound=compounds[randomelement(compounds)]
        function setcompound(){
            compound=compounds[randomelement(compounds)]
            compounddisplay.innerHTML=`${compound[0]}<sup id="charge">${compound[1]}</sup> <span id="reagent">${compound[2]}</div>`
        }
        setcompound()
        function changecolor(color){
            solutioncolor=color//Its Ok I too experiments with source code :)
            pptdisplay.style.fill=color
            showstate()
        }
        function changestate(){
            let states=['pptcls','solcls']
            issolution=issolution != 1 ? 1 : 0;
            document.querySelector('#precipitatebtn').className=states[issolution]
            showstate()
        }
        function showstate(){
            if (issolution){
                solutiondisplay.style.fill=ppt.style.fill
            }else{
                solutiondisplay.style.fill='#b2bdff'
            }
        }
        function check(){
            if(solutioncolor===compound[4] && issolution===compound[3]){
            var audio = new Audio('assets/ding.mp3');
            audio.play();
            checkbtn.disabled=true
            checkbtn.innerHTML='☑'
            checkbtn.className='animatedcheck'
            congratulationsheckerareuhappynow=congratulationsheckerareuhappynow+1
            }
            else{
                congratulationsheckerareuhappynow=0
            }scoreboard.innerHTML=congratulationsheckerareuhappynow
        }
        checkbtn.addEventListener('animationend',()=>{
            if(checkbtn.innerHTML!=='Check'){
            checkbtn.disabled=false
            checkbtn.className='animatedcheckbackwards'
            setcompound()
            checkbtn.innerHTML='Check'
            }
        })
        function changevisibilitypopup(){
            if (popup.style.display === "none") {
                popup.style.display = "block";
            } else {
                popup.style.display = "none";
        }
        }
        