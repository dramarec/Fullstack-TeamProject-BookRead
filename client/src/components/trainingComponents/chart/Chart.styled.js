import styled from 'styled-components';

const ChartWrapper = styled.div`
    @media screen and (max-width: 767px) {
        margin: 0 auto 30px;
    }
    /* margin: 0 auto 46px; */
    //width: 270px;
    width: 270px;
    padding: 14px 21px 5px 22px;
    background: #ffffff;
    box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.25);

    @media screen and (min-width: 768px) {
        margin-bottom: 36px;
        margin-top: 40px;
        width: 678px;
        padding: 14px 22px 12px 22px;
        .title {
            margin-bottom: 12px;
        }
    }
    @media screen and (min-width: 1280px) {
        width: 886px;
        margin-top: 0px;
        height: 340px;
    }
    .title-wrap {
        display: flex;
        align-items: baseline;
    }
    .page-wrap {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 25px;
        height: 25px;
        background-color: #f5f7fa;
    }
    .title {
        margin-right: 9px;
        margin-bottom: 9px;
        font-weight: 500;
    }
    .text-x-line {
        display: block;
        margin-top: 5px;
    }
    .title,
    .pages {
        font-size: 12px;
        line-height: 3.16;
        text-transform: uppercase;
        color: #242a37;
    }
    .pages {
        font-weight: 600;
        text-align: center;
    }
    .chart-box {
        position: relative;
    }
    .legend {
        margin-bottom: 10px;
        width: 50px;
        height: 30px;
        padding: 5px 10px;
        font-size: 12px;
        line-height: 32px;
        background-color: #f5f7fa;
        /* color: #091E3F; */
        box-shadow: 0px 2px 3px rgba(9, 30, 63, 0.1);
    }
    /* .recharts-default-legend {
        margin: 40px;
    } */
    .text-x-line {
        margin-top: -10px;
        padding-right: 20px;
        text-align: right;
        font-weight: 600;
        font-size: 12px;
        line-height: 3.16;
        text-transform: uppercase;
        color: #091e3f;
    }
`;

export default ChartWrapper;
