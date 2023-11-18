export function useMDXComponents(components) {
    return {
      strong: ({children}) => <strong style={{color:'blue'}}>{children}</strong>,
      ...components,
    }
  }