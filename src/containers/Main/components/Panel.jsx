import React, { memo } from 'react'
import RefreshIcon from '../../../assets/images/refresh.svg'
import { Card, Typography, Button, Select, MenuItem } from '../../../components'
import COUNTRIES from '../../../commons/constants/countries'
import { CardPanelContentStyled, ItemStyled, ItemStyledImg } from './style'

const navigatorHasShare = navigator.share

function Panel({ updateAt, onChange, data, country, getCoviddata }) {
    const { cases, recovered, deaths, todayCases, todayDeaths } = data
  
    const renderCountries = (country, index) => (
      <MenuItem key={`country-${index}`} value={country.value}>
        <ItemStyled>
          <div>{country.label}</div>
          <img src={country.flag} alt={`País-${country.label}`} width="32px" />
        
        </ItemStyled>
      </MenuItem>
    )


    
    return (
        <Card>
            <CardPanelContentStyled>
                <div>
                    <Typography variant="h5" component="span" color="primary">Coronavírus na Copa do Mundo 2022</Typography>
                    <br/>
                    <Typography variant="h8" component="span" color="primary">Acompanhe em tempo real a situação dos países que participarão da Copa do Mundo em 2022 - </Typography>
              
                    <Typography variant="body2" component="span" color="primary">Atualizado em: {updateAt}</Typography>
                    
                    <div className="pt-2">
                        <Select onChange={onChange} value={country}>
                            {COUNTRIES.map(renderCountries)}
                        </Select>
                       
                    </div>
                    
                </div>
                
            </CardPanelContentStyled>
            
        </Card>
    )
}

export default memo(Panel)