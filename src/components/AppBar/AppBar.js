
import { AppBarLink, AppBarUl, AppBarLi } from './AppBar.styled';

export const AppBar = () => {
   return (<>
        <AppBarUl>
            <AppBarLi>
              <AppBarLink to="/">Home</AppBarLink>
            </AppBarLi>
            <AppBarLi>
              <AppBarLink to="movies">Movies</AppBarLink>
            </AppBarLi>
        </AppBarUl>
        
        </>
        
    )
}

