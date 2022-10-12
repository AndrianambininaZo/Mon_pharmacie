import React from 'react';
import Sidebar from '../../layouts/admin/Sidebar';
import styled from 'styled-components';
import Navbara from '../../layouts/admin/Navbara';
import { Outlet } from 'react-router-dom';
const MasterLayout = () => {
    const MasterPage=styled.div`
    display: flex;
    `
    const Main=styled.div`
    margin-left: 200px; 
    width: calc(100% - 200px);   
    `
    const Section=styled.div`
    margin-top: 50px;
    
    `
    return (
        <MasterPage>
            <Sidebar/>
            <Main>
                <Navbara/>
                <Section>
                <Outlet/>
                </Section>                
            </Main>                                  
        </MasterPage>
        
    );
};

export default MasterLayout;