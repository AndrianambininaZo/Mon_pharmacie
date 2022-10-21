<li className='liDropdown'>
            <MedicationIcon className='incon1' />
            <NavDropdown title="Medicament" className='NavDropdown'>
              <NavDropdown.Item>
                <Link to='/admin/famille'><GroupIcon className='incon' />Famille</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to='/admin/medicament'><ListAltIcon className='incon' />Liste</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </li>
          <li className='li'>
            <Link to='/admin/medicament'><InventoryIcon className='incon' />Stock</Link>
          </li>
          <li className='liDropdown'>
            <LocalShippingIcon className='incon1' />
            <NavDropdown title="Achat" className='NavDropdown'>
              <NavDropdown.Item>
                <Link to='/admin/fournisseur'><ShowChartIcon className='incon' />Fournisseur</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to='/admin/medicament'><ShoppingCartIcon className='incon' />Commande</Link>
              </NavDropdown.Item>
              <NavDropdown.Item>
                <Link to='/'><ListAltIcon className='incon' />Liste</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </li>
          <li className='liDropdown'>
            <PointOfSaleIcon className='incon1' />
            <NavDropdown title="Vente" className='NavDropdown' id='1'>
              <NavDropdown.Item><Link to='/'>Avec prise en charge</Link>
              </NavDropdown.Item>
              <NavDropdown.Item><Link to='/'>Sans prise en charge</Link>
              </NavDropdown.Item>
              <NavDropdown.Item><Link to='/'><ListAltIcon className='incon' />Liste vente</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </li> 