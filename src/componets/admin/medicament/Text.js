import React from 'react';
2import styled from 'styled-components';
3import faker from 'faker';
4import Button from '../shared/Button';
5import DataTable from '../../src/index';
6
7const createUser = () => ({
8	id: faker.datatype.uuid(),
9	name: faker.name.findName(),
10	email: faker.internet.email(),
11	address: faker.address.streetAddress(),
12	bio: faker.lorem.sentence(),
13	image: faker.image.avatar(),
14});
15
16const createUsers = (numUsers = 5) => new Array(numUsers).fill(undefined).map(createUser);
17
18const fakeUsers = createUsers(2000);
19
20const TextField = styled.input`
21	height: 32px;
22	width: 200px;
23	border-radius: 3px;
24	border-top-left-radius: 5px;
25	border-bottom-left-radius: 5px;
26	border-top-right-radius: 0;
27	border-bottom-right-radius: 0;
28	border: 1px solid #e5e5e5;
29	padding: 0 32px 0 16px;
30
31	&:hover {
32		cursor: pointer;
33	}
34`;
35
36const ClearButton = styled(Button)`
37	border-top-left-radius: 0;
38	border-bottom-left-radius: 0;
39	border-top-right-radius: 5px;
40	border-bottom-right-radius: 5px;
41	height: 34px;
42	width: 32px;
43	text-align: center;
44	display: flex;
45	align-items: center;
46	justify-content: center;
47`;
48
49
50const FilterComponent = ({ filterText, onFilter, onClear }) => (
51	<>
52		<TextField
53			id="search"
54			type="text"
55			placeholder="Filter By Name"
56			aria-label="Search Input"
57			value={filterText}
58			onChange={onFilter}
59		/>
60		<ClearButton type="button" onClick={onClear}>
61			X
62		</ClearButton>
63	</>
64);
65
66const columns = [
67	{
68		name: 'Name',
69		selector: row => row.name,
70		sortable: true,
71	},
72	{
73		name: 'Email',
74		selector: row => row.email,
75		sortable: true,
76	},
77	{
78		name: 'Address',
79		selector: row => row.address,
80		sortable: true,
81	},
82];
83
84export const Filtering = () => {
85	const [filterText, setFilterText] = React.useState('');
86	const [resetPaginationToggle, setResetPaginationToggle] = React.useState(false);
87	const filteredItems = fakeUsers.filter(
88		item => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()),
89	);
90
91	const subHeaderComponentMemo = React.useMemo(() => {
92		const handleClear = () => {
93			if (filterText) {
94				setResetPaginationToggle(!resetPaginationToggle);
95				setFilterText('');
96			}
97		};
98
99		return (
100			<FilterComponent onFilter={e => setFilterText(e.target.value)} onClear={handleClear} filterText={filterText} />
101		);
102	}, [filterText, resetPaginationToggle]);
103
104	return (
105		<DataTable
106			title="Contact List"
107			columns={columns}
108			data={filteredItems}
109			pagination
110			paginationResetDefaultPage={resetPaginationToggle} // optionally, a hook to reset pagination to page 1
111			subHeader
112			subHeaderComponent={subHeaderComponentMemo}
113			selectableRows
114			persistTableHead
115		/>
116	);
117};
118
119export default {
120	title: 'Examples/Filtering',
121	component: Filtering,
122};


<div className='labelTile'>
                    <label>Nom:</label>
                    <label>DateProduction:</label>
                    <label>DatePeremption:</label>
                    <label>PrixAchat:</label>
                    <label>PrixVente:</label>
                    <label>Famille:</label>
                </div>
                <form className='input'>
                        <input type="text" placeholder='medicament' />
                        <input type="date" placeholder='medicament' />
                        <input type="date" placeholder='medicament' />
                        <input type="number" placeholder='medicament' />
                        <input type="number" placeholder='medicament' />
                        <select name="" id="">
                            <option value="">---------------Famille-----------</option>
                        </select>
                        <button className='btn btn-primary' >Ajouter</button>
                </form> 

.labelTile{
    display: flex;
    flex-direction: column;
    gap: 1.3rem;
}
.input{
    margin-left: 4px;
    width: 60%;
    display: flex;
    flex-direction: column;
    gap: .9rem;
    input{
        width: 100%;
        border-radius: 10px;
    }
    select{
        width: 100%;
        border-radius: 10px;                
    }
    button{
    }
}