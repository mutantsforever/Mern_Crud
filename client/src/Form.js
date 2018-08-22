import React from 'react';

export default class Form extends React.Component {

    state = {
        text: '',  
    }

    handleChange = (e) => {
        const newText = e.target.value;
        this.state.text({
            text: newText
        });
    };

    render() {
        const {text} = this.state;
        return (
            <TextField
          label="todo..."
          margin="normal"
          value={text}
          onChange={this.handleChange}
          fullwidth
        />

        );

    }
}