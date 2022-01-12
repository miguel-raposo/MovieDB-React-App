import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

// Styles
import { Wrapper, Content } from './SearchBar.styles';

// Image
import searchIcon from '../../images/search-icon.svg';

const SearchBar = ({ setSearchTerm }) => {
    const [state, setState] = useState('');
    const initial = useRef(true); // Don't run on initial render
    
    // Add delay before search
    useEffect(() => {
        // Don't run on initial render
        if (initial.current) {
            initial.current = false;
            return;
        }
        const timer = setTimeout(() => {
            setSearchTerm(state);
        }, 500);

        return () => clearTimeout(timer);
    }, [setSearchTerm, state]);

    return (
        <Wrapper>
            <Content>
                <img 
                    src = { searchIcon } 
                    alt = 'search-icon' 
                />
                <input 
                    type = 'text' 
                    placeholder = 'Search Movie' 
                    onChange = { event => setState( event.currentTarget.value )}
                    value = { state }
                />
            </Content>
        </Wrapper>
    )
};

SearchBar.propTypes = {
    setSearchTerm: PropTypes.func,
};

export default SearchBar;