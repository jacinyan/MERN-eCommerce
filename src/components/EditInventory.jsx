import React, { Component } from 'react'
import axios from 'config/axios'
import { toast } from "react-toastify";

export default class EditInventory extends Component {

    state = {
        id: '',
        name: '',
        price: 0,
        tags: '',
        image: '',
        status: 'available'
    }

    componentDidMount() {
        const { id, image, name, tags, price, status } = this.props.product
        this.setState({
            id,
            image,
            name,
            tags,
            price,
            status
        })
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        // console.log({ ...this.state });
        const product = { ...this.state }
        axios.put(`products/${this.state.id}`, product)
            .then(response => {
                this.props.close(response.data)
                toast.success('Successfully updated')
            })
    }

    handleDelete = () => {
        axios.delete(`products/${this.state.id}`)
            .then(() => {
                this.props.deleteProduct(this.state.id)
                this.props.close()
                toast.success('Successfully deleted')
            })
    }

    render() {

        const { name, price, tags, image, status } = this.state

        return (
            <div className="inventory">
                <p className="title has-text-centered">
                    Inventory
                </p>
                <form onSubmit={this.handleSubmit}>
                    <div className="field">
                        <div className="control">
                            <label className="label">Name</label>
                            <textarea className="textarea" name="name" value={name} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className="label">Price</label>
                            <input type="number" className="input" name="price" value={price} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className="label">Tags</label>
                            <input type="text" className="input" name="tags" value={tags} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className="label">Image</label>
                            <input type="text" className="input" name="image" value={image} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <label className="label">Status</label>
                            <div className="select is-fullwidth">
                                <select name="status" value={status} onChange={this.handleChange}>
                                    <option >available</option>
                                    <option >unavailable</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className="field is-grouped is-grouped-centered">
                        <div className="control">
                            <button className="button is-link">
                                Submit
                            </button>
                        </div>
                        <div className="control">
                            <button className="button is-danger" type="button" onClick={this.handleDelete}>
                                Delete
                            </button>
                        </div>
                        <div className="control">
                            <button className="button is-link" type="button" onClick={() => { this.props.close() }}>
                                Cancel
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

