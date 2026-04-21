export const tiers = [
  {
    id: 'individual',
    label: 'Individual',
    price: 200,
    description: '1 attendee',
  },
  {
    id: 'group',
    label: 'Group',
    price: 600,
    description: 'Up to 4 attendees',
  },
]

export const initiatePayment = ({ tier, attendeeData, onSuccess, onFailure }) => {
  const options = {
    key: import.meta.env.VITE_RAZORPAY_KEY_ID,
    amount: tier.price * 100,
    currency: 'INR',
    name: 'AWS Community Day',
    description: `${tier.label} Registration`,
    handler: function (response) {
      onSuccess({
        razorpay_payment_id: response.razorpay_payment_id,
        tier: tier.id,
        amount: tier.price,
      })
    },
    prefill: {
      name: attendeeData.fullName,
      email: attendeeData.email,
      contact: attendeeData.phone,
    },
    theme: {
      color: '#7c3aed',
    },
    modal: {
      ondismiss: function () {
        onFailure('Payment cancelled.')
      },
    },
  }

  const rzp = new window.Razorpay(options)
  rzp.on('payment.failed', function (response) {
    onFailure(response.error.description)
  })
  rzp.open()
}
