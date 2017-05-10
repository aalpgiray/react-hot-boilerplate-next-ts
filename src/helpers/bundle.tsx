import * as React from "react";

export interface IBundleProps<T> {
  load: any,
  callback: any
}

export class Bundle<T> extends React.Component<IBundleProps<T>, any> {
  state: any = {
    mod: null
  }

  componentWillMount() {
    this.load(this.props)
  }

  componentWillReceiveProps(nextProps: any) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps)
    }
  }

  load(props: any) {
    this.setState({
      mod: null
    })
    props.load((mod: any) => {
      this.setState({
        // handle both es imports and cjs
        mod: mod.default ? mod.default : mod
      })
    })
  }

  render() {
    return this.props.callback(this.state.mod)
  }
}