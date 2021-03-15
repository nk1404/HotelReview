import React, {useContext} from "react";
import {useHistory, withRouter} from "react-router-dom";
import withStyles from "react-jss";
import propTypes from "prop-types";
import {Form, Field} from "react-final-form";
import hotelOptions from "../../data/mappingData/homePage.data";
import HomePageLabels from "../../data/constants/homePage.constants";
import DataAccessService from "../../service/httpService";
import FormContext from "../../data/contexts";
import homeBanner from "../../assets/images/homeBanner.jpg"


const styles = {
    homeBanner: {
        backgroundImage: "url(./assets/images/homeBanner.jpg)",
        width: "auto",
        height: "10rem"
    },
    branding: {
        background: "#511E61",
        color: "white",
        minHeight: "80vh"
    },
    paddingTop2: {
        paddingTop: "2rem"
    },
    marginTop2: {
        marginTop: "2rem"
    }
    
};

const HomePage = ({classes}) => {
    const history = useHistory();
    const [formContext, setFormContext] = useContext(FormContext);
    const onSubmit = (values) => {
        console.log(values);
        DataAccessService.fetchReviews(values.hotelName)
            .then(result => {
                if(result){
                    setFormContext({
                        reviewResults: result
                    });
                    history.push({
                        pathname: "/hotel-reviews"
                    });
                }
            })
    }

    return (
        <Form onSubmit={onSubmit}
            render= {({handleSubmit,  submitting, pristine}) => (
                <form onSubmit={handleSubmit} id="hotelSelectForm">
                    <div>
                        <img className={classes.homeBanner} src={homeBanner} alt="homeBanner"/>
                    </div>
                    <div className={classes.branding}>
                        <div className={classes.paddingTop2}>
                            <h1>{HomePageLabels.WELCOME}</h1>
                        </div>
                        <h3 className={classes.paddingTop2}>{HomePageLabels.HOTEL_SELECTION}</h3>
                        <Field name="hotelName" className={classes.marginTop2} component="select" >
                            <option></option>
                            {hotelOptions.map((options) => (
                               <option key={options.value} value={options.value}>{options.label}</option>
                            ))}
                        </Field>
                        <div className={classes.marginTop2}>
                        <button type="submit" className="btn btn-success mt-4" disabled={submitting || pristine}>Continue</button>
                        </div>
                    </div>

                </form>
            )}
        />
    );

}

// eslint-disable-next-line react/no-typos
HomePage.propTypes = {
    classes: propTypes.shape({
        homeBanner: propTypes.string
    }).isRequired
}

export default withRouter(withStyles(styles)(HomePage));