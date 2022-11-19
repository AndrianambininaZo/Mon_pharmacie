
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import HomeIcon from '@mui/icons-material/Category';
import ListAltIcon from '@mui/icons-material/ListAlt';
import MedicationIcon from '@mui/icons-material/Medication';
import GroupIcon from '@mui/icons-material/Group';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
export const data=[
   {
        title:'Medicaments',
        Incon:MedicationIcon,
        children:[
            {
                title:'Famille',
                path:'famille',
                Incon:GroupIcon,
            },
            {
                title:'Liste',
                path:'medicament',
                Incon:ListAltIcon,
            },
        ]
    },
    
    {
        title:'Achat',
        Incon:ShoppingBasketIcon,
        children:[
            {
                title:'Fournisseurs',
                path:'fournisseur',
                Incon:AssignmentIndIcon,
            },
            {
                title:'Commande',
                path:'commande',
                Incon:ShoppingCartIcon,
            },
           
            {
                title:'Liste',
                path:'achat',
                Incon:ListAltIcon,
            }
        ]
    },
    {
        title:'Vente',
        Incon:LocalShippingIcon,
        children:[
            {
                title:'Client',
                path:'client',
                Incon:ListAltIcon,
            },
            {
                title:'Avec Prise',
                path:'venteavec',
                Incon:ShoppingCartIcon,
            },
            {
                title:'Sans Prise',
                path:'ventesans',
                Incon:ListAltIcon,
            },
           
        ]
    }

];