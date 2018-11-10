import React, {Component} from 'react';
import Select from "react-select";
import "react-select/dist/react-select.css";
import axios from 'axios';

class CountrySelect extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            countries       : [],
            country_selected : {}
        };
    }

    componentWillMount() {

        axios.get('https://restcountries.eu/rest/v2/all').then((response) => {
            console.log(response.data);

            let countries = [];

            response.data.forEach(function(element) {
                countries.push({
                    label:element.name,
                    value:element.numericCode
                });
            });
            this.setState({
                countries,
                country_selected : countries.find(function(element) {
                    return element.label === "Spain";
                }),
            });
        });
    }

    saveCountry(value) {
        this.setState({
            country_selected: this.state.countries.find(function(element) {
                return element.value === value;
            })
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6">
                    <Select
                        id="countrySelect"
                        autoFocus
                        simpleValue
                        name="countrySelect"
                        options={this.state.countries}
                        value={this.state.country_selected}
                        placeholder="Seleccione un pais"
                        onChange={this.saveCountry.bind(this)}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="countrySelect">{ this.state.country_selected.label }</label>
                </div>
            </div>
        );
    }
}

export default CountrySelect;
