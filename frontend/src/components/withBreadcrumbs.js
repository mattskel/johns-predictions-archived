import Breadcrumbs from './Breadcrumbs';

function withBreadcrumbs(Component) {
  return (props) => {
    return (
      <div>
        <Breadcrumbs currentPage={props.currentPage}/>
        <Component {...props}/>
      </div>
    );
  };
}

export default withBreadcrumbs;
