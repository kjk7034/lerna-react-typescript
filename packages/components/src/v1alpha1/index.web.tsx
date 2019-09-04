import React, { Suspense } from 'react';
import Loadable from 'react-loadable'
import { 
    BrowserRouter as Router, 
    Link, 
    Redirect, 
    Route,
    RouteComponentProps,
    Switch
} from 'react-router-dom';

import './style'
import './web.less'

const componentNames = [
    'Button'
]

const PageContainer: React.SFC<any> = props => {
    return (
      <div className="container">
          <div className="sider">
            <Route
                path="/:component(.*)"
                exact={true}
                // tslint:disable-next-line:jsx-no-lambda
                children={({ match }) => {
                return (
                    <ul>
                        {componentNames.map(componentName => {
                            return (
                            <li key={componentName}>
                                <Link to={`/${componentName}`}>{componentName}</Link>
                            </li>
                            )
                        })}
                    </ul>
                )
                }}
            />
          </div>
          <div className="content">
            {props.children}
          </div>
      </div>
    )
  }

const ComponentLoadable = (props: RouteComponentProps<any>) => {
    const componentName = props.match.params.component
    const Component = Loadable({
      loader: () =>
        import(/* webpackChunkName: "components/demo/[request]" */
        `./${componentName}/demo`),
      loading: () => null
    })
    return (
      <PageContainer>
        <Component />
      </PageContainer>
    )
  }

export default () => (
    <>
    <Router>
        <Suspense fallback={<div>Loading...</div>}>
        <Switch>
            <Redirect exact={true} from="/" to={`/${componentNames[0]}`} />
            <Route path="/:component(.*)" component={ComponentLoadable} />
        </Switch>
        </Suspense>
    </Router>
  </>
);
