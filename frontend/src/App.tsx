import { Route, Switch, Redirect } from "wouter";
import HomePage from "./pages/public/HomePage";
import AuthorityEconomics from "./pages/public/AuthorityEconomics";
import AuthorityPartner from "./pages/public/AuthorityPartner";
import CertifiedOperator from "./pages/public/CertifiedOperator";
import Features from "./pages/public/Features";
import SmbSales from "./pages/public/SmbSales";

function App() {
    return (
        <Switch>
            <Route path="/economics" component={AuthorityEconomics} />
            <Route path="/partner" component={AuthorityPartner} />
            <Route path="/operator" component={CertifiedOperator} />
            <Route path="/features" component={Features} />
            <Route path="/smb" component={SmbSales} />

            <Route path="/" component={HomePage} />

            <Route>404: Page Not Found</Route>
        </Switch>
    );
}

export default App;
