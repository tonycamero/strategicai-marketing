import { Route, Switch, Redirect } from "wouter";
import HomePage from "./pages/public/HomePage";
import AuthorityEconomics from "./pages/public/AuthorityEconomics";
import AuthorityPartner from "./pages/public/AuthorityPartner";
import CertifiedOperator from "./pages/public/CertifiedOperator";
import Partners from "./pages/public/Partners";
import SmbSales from "./pages/public/SmbSales";

function App() {
    return (
        <Switch>
            <Route path="/economics" component={AuthorityEconomics} />
            <Route path="/partner" component={AuthorityPartner} />
            <Route path="/operator" component={CertifiedOperator} />
            <Route path="/partners" component={Partners} />
            <Route path="/smb" component={SmbSales} />

            <Route path="/" component={HomePage} />

            <Route>404: Page Not Found</Route>
        </Switch>
    );
}

export default App;
