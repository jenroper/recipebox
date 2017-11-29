class UpdateToolsInRecipe < ActiveRecord::Migration[5.1]
  def change
    change_column :recipes, :tools, :string
  end
end
