import styled from 'styled-components';

const ChartWrapper = styled.div`

margin: 0 auto 10px;
padding: 14px 22px 39px 22px;
background: #FFFFFF;
box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.25);

@media screen and (min-width: 768px){
    width: 678px;
    .title{
    margin-bottom:12px;}
}
@media screen and (min-width: 1280px){
    width: 886px;
} 
.title-wrap{
    display:flex;
    align-items:baseline;
}
.page-wrap{
    display:flex;
    align-items:center;
    justify-content:center;
    width:25px;
    height:25px;
    background-color:#F5F7FA;
}
.title{
    margin-right:9px;
    margin-bottom:9px;
    font-weight: 500;}
.title,
.pages{
    font-size: 12px;
    line-height: 3.16;
    text-transform: uppercase;
    color: #242A37;

}
.pages{
    font-weight: 600;
    text-align: center;
}
.chart-box{
    position:relative;
}
.legend{
    margin-bottom:10px;
    width: 50px;
    height: 30px;
    padding:5px 10px;
     font-size: "12px";
    line-height: "24px";
    background-color:#F5F7FA;
    /* color: #091E3F; */
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
}
.text-x-line{
    margin-top: -30px;
    padding-right:20px;
    text-align:right;
    font-weight: 600;
    font-size: 12px;
    line-height: 3.16;
    text-transform: uppercase;
    color: #091E3F;
}
`

export default ChartWrapper