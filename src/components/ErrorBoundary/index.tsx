import DefaultFallback from './defaultFallback';
import { Component, ErrorInfo, PropsWithChildren, isValidElement } from 'react';

interface ErrorBoundaryProps {
  fallback?: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<PropsWithChildren<ErrorBoundaryProps>, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: Error) {
    // 当发生错误时，更新 state 以显示错误 UI
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // 在此处记录错误信息，或者将错误报告给服务器
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // 如果发生错误，返回备用的 UI
      const { fallback } = this.props;
      if (isValidElement(fallback)) return this.props.fallback;
      return <DefaultFallback />;
    }

    // 否则渲染子组件
    return this.props.children;
  }
}

export default ErrorBoundary;
