import { create } from "zustand";
import { persist } from "zustand/middleware";

const useOrderStore = create(
  persist(
    (set) => ({
      order: [],
      addToOrder: (product) =>
        set((state) => {
          const existingProductIndex = state.order.findIndex(
            (prod) => prod.id === product.id
          );
          switch (existingProductIndex) {
            case -1:
              return { order: [...state.order, product] };
            default: {
              const updatedOrder = [...state.order];
              updatedOrder[existingProductIndex].quantity +=
                product.quantity || 1;
              return { order: updatedOrder };
            }
          }
        }),
      removeFromOrder: (productId) =>
        set((state) => ({
          order: state.order.filter((prod) => prod.id !== productId),
        })),
      clearOrder: () => set({ order: [] }),
    }),
    {
      name: "product-order",
      getStorage: ()=> localStorage,
      serialize: (data) => JSON.stringify(data),
      deserialize: (data) => JSON.parse(data),
    }
  )
);

export default useOrderStore;
