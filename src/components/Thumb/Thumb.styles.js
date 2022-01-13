import styled from "styled-components";

export const Wrapper = styled.div`
    color: var(--white);
    background: var(--darkGrey);
    border-radius: 20px;
    text-align: center; 
    
    div {
        height: 90px;
        line-height: 90px;
    }

    h3 {
        margin: auto;
        width: 90%;
        padding: 5px 0;
        font-size: var(--fontMed);
        display: inline-block;
        vertical-align: middle;
        line-height: 20px; /* <-- adjust this */
    }
`;
export const Image = styled.img`
    width: 100%;
    max-width: 720px;
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;
    animation: animateThumb 0.5s;
    
    :hover {
        opacity: 0.8;
    }

    @keyframes animateThumb {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;