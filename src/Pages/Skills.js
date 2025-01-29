import styled from "styled-components";
import MotionHoc from "./MotionHoc";
import { useState } from "react";
import front from "../assets/front.PNG";
import back from "../assets/back.PNG";
import ai from "../assets/ai.PNG";


const SkillContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    h1{
        position:absolute;
        top: 0.5em;
        left:10.45em;
        color: #24305E;
        font-family: 'Amatic SC', cursive;
        font-size: 70px;
    }

    .arrow{
        height:50px;
        position:absolute;
        top: 45%;
        cursor: pointer;
        filter: invert(74%) sepia(10%) saturate(316%) hue-rotate(162deg) brightness(92%) contrast(97%);

        &.left{
            left:180px;

        }

        &.right{
            right: 140px;
            transform: rotateY(180deg);
        }

        &:hover{
            filter: invert(11%) sepia(31%) saturate(4155%) hue-rotate(222deg) brightness(106%) contrast(127%);
           
        }
    }

    span{
        position: absolute;
        bottom:0;
        left:54.3em;
        color: #24305E;
        font-size: 13px;
    }
`;

const Slider = styled.div`
    display:flex;
    position: absolute;
    left:0;
`;

const Container = styled.div`
    width: 100vw;
    display:flex;
    align-items: center;
    justify-content: center;
    transition: all 1s ease;
`;

const Item = styled.div`
    width: 800px;
    height: 55vh;
    background-color: white;
    border-radius:20px;
    position:absolute;
    left: 400px;
    top: 12em;
    display:flex;
    align-items: center;
    justify-content: center;

`;

const Left = styled.div`
    flex: 4;
    height: 100%;
    display: flex;
    border-radius:20px;
    align-items: center;
    justify-content: center;
    background-color: pink;
`;

const LeftContainer = styled.div`
    width:90%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: center;

    h2{
        font-size: 50px;
        font-family: 'Amatic SC', cursive;
    }
    p{
        font-family: 'Nanum Pen Script', cursive;
        font-size: 25px;
    }
`;

const ImgContainer = styled.div`
    width:85px;
    height:85px;
    border-radius: 50%;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 5.15em;

    img{ 
        position:absolute;
        left: 6.5em;
        width:70px;
    }

`;

const Right = styled.div`
    flex: 8;
    height: 110%;

    img{
        width:350px;
        position: absolute;
        right: 75px;
        top: 20px;
    

    }
`;

const SkillsComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOn8DbriioqMj7tDtHLNiQlWeERCGPCnWcWg&s",
      title: "Front-end",
      desc:
        "I like to design and portray creative vision while optimizing user experience",
      img: front,
    },
    {
      id: "2",
      icon: "http://simpleicon.com/wp-content/uploads/Code-Optimization-150x150.png",
      title: "Back-end",
      desc:
        "Heres a list of languages and tools that I have worked with",
      img: back,
    },
    {
      id: "3",
      icon: "http://simpleicon.com/wp-content/uploads/group-3-150x150.png",
      title: "Interpersonal",
      desc:
        "Along with my technical skills I have also achieved & aimed for organizational skills",
      img:
        "https://media.istockphoto.com/vectors/vector-set-of-linear-icons-related-to-skills-empowerment-leadership-vector-id1151153526?k=6&m=1151153526&s=612x612&w=0&h=wJM2WcyBeVkm8WaROVEf7rmFLd-RYUFNed0_ot8435o=",
    },
    {
        id: "4",
        icon: "http://simpleicon.com/wp-content/uploads/plus-150x150.png",
        title: "Extras",
        desc:
          "I worked with these for my AI course at University",
        img: ai,
      },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

    return (
        <SkillContainer>

            <h1>My Skills</h1>
            <Slider>
                {data.map((d) =>(
                <Container style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                    <Item>
                        <Left>
                            <LeftContainer>
                                <ImgContainer>
                                    <img src={d.icon} alt="" />
                                </ImgContainer>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                            </LeftContainer>
                        </Left>
                        
                        <Right>
                            <img src={d.img}/>
                        </Right>
                    </Item>
                </Container>
                ))}
            </Slider>

            <img src="http://simpleicon.com/wp-content/uploads/arrow-18-150x150.png" className="arrow right"   onClick={() => handleClick()}/>
            <img src="http://simpleicon.com/wp-content/uploads/arrow-18-150x150.png" className="arrow left"   onClick={() => handleClick("left")}/>
            <span>©2021 Himaja Kakade. All Rights Reserved.</span>
        </SkillContainer>
    )
}

const Skills = MotionHoc(SkillsComponent);

export default Skills;


