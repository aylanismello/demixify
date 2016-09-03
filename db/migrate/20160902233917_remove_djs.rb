class RemoveDjs < ActiveRecord::Migration[5.0]
  def change
    drop_table :djs
  end
end
